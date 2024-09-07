const timeEnd = new Date('1/1/2025');

var Countdown = {
   // DOM elements
   time: document.querySelector('.countdown'),

   countdown_interval: null,
   total_seconds: 0,

   init: function () {
      this.timeD = {
         days: this.time.querySelector('.bloc-time.day .figure'),
         hours: this.time.querySelector('.bloc-time.hour .figure'),
         minutes: this.time.querySelector('.bloc-time.min .figure'),
         seconds: this.time.querySelector('.bloc-time.sec .figure')
      };

      this.total_seconds = Math.floor((timeEnd - new Date()) / 1000);
      this.count();
   },

   count: function () {
      var that = this,
         day_1 = document.getElementById('day-1'),
         day_2 = document.getElementById('day-2'),
         day_3 = document.getElementById('day-3'),
         hour_1 = document.getElementById('hour-1'),
         hour_2 = document.getElementById('hour-2'),
         min_1 = document.getElementById('min-1'),
         min_2 = document.getElementById('min-2'),
         sec_1 = document.getElementById('sec-1'),
         sec_2 = document.getElementById('sec-2');

      this.countdown_interval = setInterval(function () {
         let today = new Date();
         let diff = Math.floor((timeEnd - today) / 1000);

         let secLeft = diff % 60;
         diff = Math.floor(diff / 60);
         let minLeft = diff % 60;
         diff = Math.floor(diff / 60);
         let hourLeft = diff % 24;
         let daysLeft = Math.floor(diff / 24);

         that.checkDay(daysLeft, day_1, day_2, day_3);
         that.checkHour(hourLeft, hour_1, hour_2);
         that.checkHour(minLeft, min_1, min_2);
         that.checkHour(secLeft, sec_1, sec_2);

         if (that.total_seconds <= 0) {
            clearInterval(that.countdown_interval);
         }
         --that.total_seconds;
      }, 1000);
   },

   checkDay: function (value, time_1, time_2, time_3) {
      var val_1 = value.toString().charAt(0),
         val_2 = value.toString().charAt(1),
         val_3 = value.toString().charAt(2),
         fig_1_value = time_1.querySelector('.top').innerHTML,
         fig_2_value = time_2.querySelector('.top').innerHTML,
         fig_3_value = time_3.querySelector('.top').innerHTML;

      if (value >= 100) {
         if (fig_1_value !== val_1) this.animateFigure(time_1, val_1);
         if (fig_2_value !== val_2) this.animateFigure(time_2, val_2);
         if (fig_3_value !== val_3) this.animateFigure(time_3, val_3);
      } else if (value >= 10) {
         if (fig_1_value !== '0') this.animateFigure(time_1, 0);
         if (fig_2_value !== val_1) this.animateFigure(time_2, val_1);
         if (fig_3_value !== val_2) this.animateFigure(time_3, val_2);
      } else {
         if (fig_1_value !== '0') this.animateFigure(time_1, 0);
         if (fig_2_value !== '0') this.animateFigure(time_2, 0);
         if (fig_3_value !== val_1) this.animateFigure(time_3, val_1);
      }
   },

   checkHour: function (value, time_1, time_2) {
      var val_1 = value.toString().charAt(0),
         val_2 = value.toString().charAt(1),
         fig_1_value = time_1.querySelector('.top').innerHTML,
         fig_2_value = time_2.querySelector('.top').innerHTML;

      if (value >= 10) {
         if (fig_1_value !== val_1) this.animateFigure(time_1, val_1);
         if (fig_2_value !== val_2) this.animateFigure(time_2, val_2);
      } else {
         if (fig_1_value !== '0') this.animateFigure(time_1, 0);
         if (fig_2_value !== val_1) this.animateFigure(time_2, val_1);
      }
   },

   animateFigure: function (time, value) {
      var top = time.querySelector('.top'),
         bottom = time.querySelector('.bottom'),
         back_top = time.querySelector('.top-back'),
         back_bottom = time.querySelector('.bottom-back');

      back_top.querySelector('span').innerHTML = value;
      back_bottom.querySelector('span').innerHTML = value;

      TweenMax.to(top, 0.8, {
         rotationX: '-180deg',
         transformPerspective: 300,
         ease: Quart.easeOut,
         onComplete: function () {
            top.innerHTML = value;
            bottom.innerHTML = value;
            TweenMax.set(top, { rotationX: 0 });
         }
      });

      TweenMax.to(back_top, 0.8, {
         rotationX: 0,
         transformPerspective: 300,
         ease: Quart.easeOut,
         clearProps: 'all'
      });
   }
};

Countdown.init();
