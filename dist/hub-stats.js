/*
 * HubStats v1.0.0
 * (c) 2022 Mohamed
 * Released under the MIT License.
 */
class HubStats {
   constructor() {
      this.version = "1.0.0";
   }

   rangeBetween(num1, num2) {
      return num2 - num1;
   }

   meanOf(data) {
      let sum = 0;
      for (let i = 0; data.length > i; i += 1) {
         sum += data[i];
      }
      return sum / data.length;
   }

   modeOf(data) {
      return data.sort(
         (a, b) =>
            data.filter((v) => v === a).length -
            data.filter((v) => v === b).length
      );
   }
}
