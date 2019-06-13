import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnesignalProvider {

  private baseApiPath = 'https://onesignal.com/api/v1/notifications';
  private appID = '31636f90-5d25-4d00-8e4b-b02e566f8a44';
  private httpHeader = new Headers();
  private options;
  private playerId = "";

  constructor(public http: Http, private platform: Platform, private oneSignal: OneSignal) {
    console.log('Hello OnesignalProvider Provider');
    if (this.platform.is('android')) {
      this.oneSignal.getIds().then((id) => { this.playerId = id.userId; });
    }
    this.httpHeader.append('Content-Type', 'application/json; charset=utf-8');
    this.httpHeader.append('Authorization', 'Basic OWM2M2U1MTMtZmE4MC00ZjAxLWIwNTQtZjRiYzIyMzE4NzNm');
    this.options = new RequestOptions({ headers: this.httpHeader });
  }

  cadastrarNotificacaoLeitura(href: string, horas: number) {
    var messageID = "";
    if (this.playerId.length > 0) {
      let agora = new Date();
      agora.setHours(agora.getHours() + horas);
      var message = {
        app_id: this.appID,
        send_after: agora,
        headings: {
          "en": "Voce tem links a ler"
        },
        contents: { "en": href },

        include_player_ids: [this.playerId]
      };

      this.http.post(this.baseApiPath, message, this.options).
        subscribe((result: any) => {
          var resp = result.json();
          messageID = resp.id;
        });
    }
    return messageID;
  }

  removeNotificacao(messageID: string) {
    let done = false;
    if (this.playerId.length > 0) {
      this.http.delete(this.baseApiPath + '/' + messageID + '?app_id=' + this.appID, this.options).subscribe();
      done = true;
    }
    return done;
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
