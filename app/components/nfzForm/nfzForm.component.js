class NfzFormController {
    constructor($scope) {
      this.$scope = $scope;
      this.headItemsTur = ["Punkty - Turośń", "Kwota - Turośń", "Prywatni - Turośń", "Suma"];
      this.headItemsBia = ["Punkty - Białystok", "Kwota - Białystok", "Prywatni - Białystok", "Suma"];
      this.pointsTur = 0;
      this.pointsBia = 0;
      this.privateMoneyTur = 0; 
      this.privateMoneyBia = 0;
      this.newPrivateMoneyTur = 0;
      this.newPrivateMoneyBia = 0;
      this.newPointsTur = 0;
      this.newPointsBia = 0;
      this.newPrivateTur = 0;
      this.newPrivateBia = 0;
      this.newValueTur = 0;
      this.newValueBia = 0;
      this.sumTur = 0;
      this.sumBia = 0;
      this.sum = 0;

      this.validMessage = {
        validPointsMessage: "Proszę, uzupełnij to pole",
        validValueMessage: "Proszę, wpisz liczbową kwotę pieniędzy zarobionych prywatnie",
        validTypeMessage: "Proszę, wpisz wartość liczbową punktów"
      };
    }

    numCheck(inputVal) {
      var numReg = /^-?\d+\.?\d*$/;
      return numReg.test(inputVal);
    }

    $onInit() {
        this.$scope.$watchGroup(["sumTur", "sumBia", "pointsTur", "newPointsTur", "newValueTur"], () => {
        this.newPointsTur = Number(this.newPointsTur);
        this.newValueTur = Number((this.newPointsTur * 0.38).toFixed(2));
        this.sum = Number((this.sumTur + this.sumBia).toFixed(2));
      });
    }

    formSubmit(isValid) {
      if(!isValid) {
        return;
      }

      function targetValueRecalculation(targetValue, newTargetValue, newFixedValue, multiplier, toFixedValue) {
          targetValue = Number(targetValue);
          newTargetValue = Number(newTargetValue);
          newTargetValue = newTargetValue + targetValue;
          newFixedValue = Number((newTargetValue * multiplier).toFixed(toFixedValue));
        console.log("test");
      }

      this.sumTur = 0;
      this.sumBia = 0;
      
      // targetValueRecalculation(this.pointsTur, this.newPointsTur, this.newValueTur, 0.38, 2);
      // targetValueRecalculation(this.pointsBia, this.newPointsBia, this.newValueBia, 0.322, 2);
      // targetValueRecalculation(this.privateMoneyTur, this.newPrivateMoneyTur, this.newPrivateTur, 0.45, 2);
      // targetValueRecalculation(this.privateMoneyBia, this.newPrivateMoneyBia, this.newPrivateBia, 0.40, 2);


      if (this.pointsTur) {
          this.pointsTur = Number(this.pointsTur);
          this.newPointsTur = Number(this.newPointsTur);
          this.newPointsTur = this.newPointsTur + this.pointsTur;
          this.newValueTur = Number((this.newPointsTur * 0.38).toFixed(2));
      }
      
      if (this.pointsBia) {
          this.pointsBia = Number(this.pointsBia);
          this.newPointsBia = Number(this.newPointsBia);
          this.newPointsBia = this.newPointsBia + this.pointsBia;
          this.newValueBia = Number((this.newPointsBia * 0.322).toFixed(2));
      }
      
      if (this.privateMoneyTur) {
          this.privateMoneyTur = Number(this.privateMoneyTur);
          this.newPrivateMoneyTur = Number(this.newPrivateMoneyTur);
          this.newPrivateMoneyTur = this.newPrivateMoneyTur + this.privateMoneyTur;
          this.newPrivateTur = this.newPrivateTur + this.privateMoneyTur * 0.45;
      }
      
      if (this.privateMoneyBia) {
          this.privateMoneyBia = Number(this.privateMoneyBia);
          this.newPrivateMoneyBia = Number(this.newPrivateMoneyBia);
          this.newPrivateMoneyBia = this.newPrivateMoneyBia + this.privateMoneyBia;
          this.newPrivateBia = this.newPrivateBia + this.privateMoneyBia * 0.40;
      }

      this.sumTur = Number((this.sumTur + this.newPrivateTur + this.newValueTur).toFixed(2));
      this.sumBia = Number((this.sumBia + this.newPrivateBia + this.newValueBia).toFixed(2));

    }
} 

const nfzForm = {
  templateUrl: 'app/components/nfzForm/nfzForm.html',
  controller: NfzFormController
}

export default nfzForm;