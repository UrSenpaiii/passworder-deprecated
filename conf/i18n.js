export default {
  fallbackLocale: "en",
  pluralizationRules: {
    "ru": function (num, choicesLength) {
      if (choicesLength === 1) return 0;
      if (choicesLength === 2) return num === 1 ? 0 : 1;
      num = Math.abs(num);
      let n10 = num % 10, n100 = num % 100;
      let result = n10 === 1 ? 0 : n10 > 0 && n10 < 5 ? 1 : 2;
      if (n100 > 10 && n100 < 20) result = 2;
      if (num === 0 && choicesLength === 4) return 0;
      return result + (choicesLength === 3 ? 0 : 1);
    }
  }
}
