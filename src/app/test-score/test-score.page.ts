import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-test-score',
  templateUrl: './test-score.page.html',
  styleUrls: ['./test-score.page.scss'],
})
export class TestScorePage implements OnInit {
  start_score:number = 0;
  end_score:number = 0;
  numberSt:number = 0;
  numberEn:number = 0;
  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('number_score_start').then(res=>{
      let score = JSON.parse(res);
      console.warn(score.data.length);
      this.numberSt = score.data.length;
    });
    this.storage.get('number_score_end').then(res=>{
      let score = JSON.parse(res);
      console.warn(score.data.length);
      this.numberEn = score.data.length;
    });


    this.storage.get('start_score').then(startScore => {
      console.info('start_score', startScore)
      if(startScore >= 0){
        this.start_score = startScore;
      }
    });
    this.storage.get('end_score').then(end_score => {
      console.warn('end_score', end_score);
      if(end_score >= 0){
        this.end_score = (end_score !== undefined)?end_score:0;
      }
    });
  }

}
