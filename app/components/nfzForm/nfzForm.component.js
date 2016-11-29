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
        validPointsMessage: "Please enter any points value",
        validValueMessage: "Please enter any private money",
        validTypeMessage: "Please fill field with numbers"
      };
    }

    $onInit() {
      this.$scope.$watchGroup(["sumTur", "sumBia", "pointsTur", "newPointsTur"], () => {
        this.newPointsTur = parseFloat(this.newPointsTur);
        // this.newValueTur = (this.newPointsTur * 0.38).toFixedNumber(2);
        // this.sum = (this.sumTur + this.sumBia).toFixedNumber(2);
      });
    }

    formSubmit(isValid) {

        /* .toFixedNumber() is highly recommended to use instead of .toFixed() 
      which converts numbers to strings for some purpose, please visit 
      http://stackoverflow.com/questions/2283566/tofixed-returns-a-string-in-javascript 
      to get more info */
      Number.prototype.toFixedNumber = (x, base) => {
        var pow = Math.pow(base || 10, x);
        return + (Math.round(this * pow) / pow);
      }

      if(!isValid) {
        return;
      }

      this.sumTur = 0;
      this.sumBia = 0;
      
      if (this.pointsTur) {
          this.pointsTur = parseFloat(this.pointsTur);
          this.newPointsTur = parseFloat(this.newPointsTur);
          this.newPointsTur = this.newPointsTur + this.pointsTur;

          //this.newValueTur = (this.newPointsTur * 0.38).toFixedNumber(2);
          // this.pointsTur = ""; //empty string assigning here is needed to clear input field
      }
      
      if (this.pointsBia) {
          this.pointsBia = parseFloat(this.pointsBia);
          this.newPointsBia = this.newPointsBia + this.pointsBia;
          this.newValueBia = (this.newPointsBia * 0.322).toFixedNumber(2);
          this.pointsBia = ""; //empty string assigning here is needed to clear input field
      }
      
      if (this.privateMoneyTur) {
          this.privateMoneyTur = parseFloat(this.privateMoneyTur);
          this.newPrivateMoneyTur = this.newPrivateMoneyTur + this.privateMoneyTur;
          this.newPrivateTur = this.newPrivateTur + this.privateMoneyTur * 0.45;
          this.privateMoneyTur = ""; //empty string assigning here is needed to clear input field
      }
      
      if (this.privateMoneyBia) {
          this.privateMoneyBia = parseFloat(this.privateMoneyBia);
          this.newPrivateMoneyBia = this.newPrivateMoneyBia + this.privateMoneyBia;
          this.newPrivateBia = this.newPrivateBia + this.privateMoneyBia * 0.40;
          this.privateMoneyBia = ""; //empty string assigning here is needed to clear input field
      }
      
      this.sumTur = (this.sumTur + this.newPrivateTur + this.newValueTur).toFixedNumber(2);
      this.sumBia = (this.sumBia + this.newPrivateBia + this.newValueBia).toFixedNumber(2);
    }
}

const nfzForm = {
  templateUrl: 'app/components/nfzForm/nfzForm.html',
  controller: NfzFormController
}

export default nfzForm;