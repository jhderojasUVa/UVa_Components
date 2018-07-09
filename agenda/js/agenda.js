agefunction eventos_jsonp(url) {
  return new Promise(function(resolve, reject) {
      let script = document.createElement('script')
      const name = "_jsonp_" + Math.round(100000 * Math.random());
      //url formatting
      if (url.match(/\?/)) url += "&callback="+name
      else url += "?callback="+name
      script.src = url;
      window[name] = function(data) {
          resolve(data);
          document.body.removeChild(script);
          delete window[name];
      }
      document.body.appendChild(script);
  });
}

class EventoTexto extends HTMLElement {
  static get is() {
    return 'evento-texto';
  }
  constructor(self) {
    self = super(self);
    self._elem=undefined;
    let shadowRoot = self.attachShadow({ mode: 'open' });
    self.setAttribute('class','col-12 col-xs-12 col-sm-12 col-md-4  slide');
    return self;
  }

  connectedCallback() {
  	this.addEventListener('click', this.onclick);
  }

  disconnectedCallback() {
  	this.removeEventListener('click', this.onclick);
  }


  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  get elem() {
    return this._elem;
  }

  set elem(val) {
    if (val) {
      var date = new Date(val.date_ini.split(" ")[0]);
      var locale = "es-Es";
      let html='';
	  html+=`
      <style>
      .header {
        border-bottom: 1px solid #121212;
        margin-right: 15px;
      }
      .header h1 {
          font-size: 26px;
          padding-right: 20px;
          padding-bottom: 7px;
          text-transform: uppercase;
          margin-right: 15px;
      }
      .agenda .bloque_raya, #agenda .bloque_raya {
        margin-left: 0;
        padding-left: 0;
        border-bottom: 1px solid #121212; }
        .agenda .bloque_raya .masinformacion, #agenda .bloque_raya .masinformacion {
          font-size: 10px;
          padding: 18px 20px;
          border: 1px solid #121212;
          text-transform: uppercase; }
          .agenda .bloque_raya .masinformacion a, #agenda .bloque_raya .masinformacion a {
            color: #121212; }
            .agenda .bloque_raya .masinformacion a:hover, #agenda .bloque_raya .masinformacion a:hover {
              color: #121212;
              text-decoration: none; }
      .agenda #agenda .bloque_agenda, #agenda #agenda .bloque_agenda {
        height: 100px;
        overflow: hidden; }
      .va{
        padding: 0.5em;
        border-radius: 4px;
        background-color: #5534ae;
      }
      .va h1, .va p {
        color: white !important;
      }
      .se {
        padding: 0.5em;
        border-radius: 4px;
        background-color: #ff9000;
      }
      .pa {
        padding: 0.5em;
        border-radius: 4px;
        background-color: #93198f;
      }
      .pa h1, .pa p {
        color: white !important;
      }
      .so {
        padding: 0.5em;
        border-radius: 4px;
        background-color: #aad000;
      }
      .uva_azul {
        padding: 0.5em;
        border-radius: 4px;
        background-color: #0e3675;
      }
      .uva_azul h1, .uva_azul p {
        color: white !important;
      }
      .uva_rosa {
        padding: 0.5em;
        border-radius: 4px;
        background-color: #ff8b92;
      }
      </style>`;
      let clase='uva_rosa';
      if (val.campus_id != 0) {
        switch (val.campus_id) {
          case 188:
            clase='va';
            break;
          case 189:
            clase='pa';
            break;
          case 190:
            clase='se';
            break;
          case 191:
            clase='so';
            break;
        }
      } else {
        if (val.id % 2 == 0) {
          clase="uva_azul"
        } else {
          clase='uva_rosa';
        }
      }
        html+='  <div class="'+clase+'">';
      if (val.title) {
        html+='    <h1>'+date.getDate()+' <small>'+date.toLocaleString(locale, { month: "long" })+'</small></h1>';
      }
      if (val.title) {
        html+='    <p>'+val.title+' '+val.id+'</p>';
      }
        html+='  </div>';
      this.shadowRoot.innerHTML = html;
    } else {
      this.removeAttribute('open');
    }
    this._elem=val;
  }



  onclick(event)  {
    if (event.target === this) {
      event.stopImmediatePropagation();
      event.preventDefault();
      //http://eventos.uva.es/ID/detail.html
      let url="http://eventos.uva.es/"+this.elem.id+"/detail.html";
      window.open(url, "_blank");
    }
  }
}
customElements.define(EventoTexto.is, EventoTexto);

//class EventoSpan extends HTMLSpanElement {
class EventoSpan extends HTMLElement {
  static get is() {
    return 'evento-span';
  }

  constructor() {
    super();
    this.indice=0;
    //this.createShadowRoot();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    this.setAttribute('class','dot');
  }

  connectedCallback() {
    this.addEventListener('click', this.onclick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onclick);
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }

  set indice(val) {
  }

  get indice() {
    return this.indice;
  }

  onclick(event)  {
    if (event.target === this) {
      event.stopImmediatePropagation();
      event.preventDefault();
      agendaoptions.slideIndex=this.indice;
      agendaoptions.automated=false;
      showSlide("agenda",agendaoptions);
    }
  }
}
//customElements.define(EventoSpan.is, EventoSpan,{ extends: 'span' });
customElements.define(EventoSpan.is, EventoSpan);

document.addEventListener("DOMContentLoaded",function(){
  //index=Solr%20Offline
  var data = eventos_jsonp("http://ediciond.uva.es:8080/system/modules/es.uva.web.portal.enterprise/elements/eventos/eventos_proxy.jsp?dataType=jsonp");
  data.then((res) => {
    let contador=0;
    if (res.events && res.total_found>0) {
        res.events.forEach(doc => {
          let evento = new EventoTexto();
          evento.elem=doc;
          document.getElementById('eventos_agenda').appendChild(evento);

          let eventodot= new EventoSpan();
          eventodot.indice=contador;
          document.getElementById('eventos_dots').appendChild(eventodot);
          contador++;
        });
      } else {
      }

      showSlide('agenda', agendaoptions);
    });


});
