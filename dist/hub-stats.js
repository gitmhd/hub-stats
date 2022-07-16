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

   medianOf(data) {
      data = data.sort((a, b) => a - b);
      let lastItem = data[data.length - 1];

      return data.length % 2
         ? data[data.indexOf(lastItem) / 2]
         : data[(data.indexOf(lastItem) - 1) / 2] ===
           data[(data.indexOf(lastItem) + 1) / 2]
         ? data[(data.indexOf(lastItem) - 1) / 2]
         : (data[(data.indexOf(lastItem) - 1) / 2] +
              data[(data.indexOf(lastItem) + 1) / 2]) /
           2;
   }

   modeOf(data) {
      return data.sort(
         (a, b) =>
            data.filter((v) => v === a).length -
            data.filter((v) => v === b).length
      );
   }
}
