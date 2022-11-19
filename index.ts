import './style.css';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

const URL: string =
  'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';

var chiave: string = "de3ee7d0";

document.getElementById('get').addEventListener('click', get_value);
document.getElementById('set').addEventListener('click', set_value);
document.getElementById('new').addEventListener('click', new_chiave);

//set e new servono per creare il nuovo teatro in base alle dimensioni richieste
// get serve per prendere il teatro se con nuove dimensioni o con le dimensioni standard
function get_value() {
  //observable
  const observable = ajax({
    method: 'GET',
    url: URL + 'get?key=' + chiave,
    crossDomain: true,
  });

  //observer
  observable.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output').innerHTML = res.response;
    },
    error: (error: AjaxError) => {
      console.error(error.response);
    },
  });
}

function set_value() {
  var set_data = document.getElementById('set_data').value;
  //observable
  const observable = ajax({
    method: 'POST',
    url: URL + 'set?key=' + chiave,
    crossDomain: true,
    body: set_data,
  });

  //observer
  observable.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output').innerHTML =
        'Ho impostato con la set ' + set_data;
    },
    error: (error: AjaxError) => {
      console.error(error.response);
    },
  });
}

function new_chiave() {
  //observable
  const observable = ajax({
    method: 'GET',
    url: URL + 'new?secret=ssw2022',
    crossDomain: true,
  });
  observable.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('output_chiave').innerHTML = res.response;
    },
    error: (error: AjaxError) => {
      console.error(error.response);
    },
  });
}
