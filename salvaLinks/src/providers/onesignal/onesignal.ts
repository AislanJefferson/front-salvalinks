import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnesignalProvider {

  private baseApiPath = 'https://hookb.in/Z23N2mGKDLi7q7eYQPNk';
  private app_id = '31636f90-5d25-4d00-8e4b-b02e566f8a44';
  private httpHeader = new Headers();
  private options;

  constructor(public http: Http, private oneSignal: OneSignal) {
    console.log('Hello OnesignalProvider Provider');
    this.httpHeader.append('Content-Type', 'application/json; charset=utf-8');
    this.httpHeader.append('Authorization', 'Basic OWM2M2U1MTMtZmE4MC00ZjAxLWIwNTQtZjRiYzIyMzE4NzNm');
    this.options = new RequestOptions({ headers: this.httpHeader });
  }

  cadastrarNotificacaoLeitura(player_id:string,href: string, horas: number) {
    let agora = new Date();
    agora.setHours(agora.getHours() + horas);
    var message = {
      app_id: this.app_id,
      send_after: agora,
      headings: {
        "en": "Voce tem links a ler"
      },
      contents: { "en": href },

      include_player_ids: [player_id]
    };
    return this.http.post(this.baseApiPath, message, this.options);
  }

  // sendNotification = function (data) {


  //   var options = {
  //     host: "onesignal.com",
  //     port: 443,
  //     path: "/api/v1/notifications",
  //     method: "POST",
  //     headers: headers
  //   };

  //   var https = require('https');
  //   var req = https.request(options, function (res) {
  //     res.on('data', function (data) {
  //       console.log("Response:");
  //       console.log(JSON.parse(data));
  //     });
  //   });

  //   req.on('error', function (e) {
  //     console.log("ERROR:");
  //     console.log(e);
  //   });

  //   req.write(JSON.stringify(data));
  //   req.end();
  // }



}
