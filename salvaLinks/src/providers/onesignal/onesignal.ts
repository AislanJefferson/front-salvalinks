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

  cadastrarNotificacaoLeitura(name: string, href: string, importancia: string, minutos: number) {

    var messageID = "";
    if (this.playerId.length > 0) {
      let channel_id;
      let prioridade;
      switch (importancia) {
        case "alta":
          channel_id = "c15b6927-a27a-4205-ae4d-227d458c2ef6";
          prioridade = 10;
          break;
        case "baixa":
          channel_id = "bc1daa1d-d0ab-42af-9a27-a01e8082b2de";
          prioridade = 0;
          break;
        default:
          channel_id = "b1fdc2c7-37ac-49c5-82a2-fcc5e4395f82";
          prioridade = 5;
          break;
      }
      let agora = new Date();
      agora.setMinutes(agora.getMinutes() + minutos);
      var message = {
        app_id: this.appID,
        send_after: agora,
        headings: {
          "en": "Voce tem link a visualizar"
        },
        contents: { "en": name },
        url: href,
        include_player_ids: [this.playerId],
        android_channel_id: channel_id,
        priority: prioridade
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
