const calculate = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const calcInput = document.getElementById('calc-input');
        const calcType = document.getElementById('calc-type');
        const calcTypeMaterial = document.getElementById('calc-type-material');
        const calcTotal = document.getElementById('calc-total');
    
        calcInput.addEventListener('input', function() {
            if (!/^\d*$/.test(this.value)) {
                this.value = this.value.replace(/[^\d]/g, '');
            }
            calculateTotal();
        });
    
        calcType.addEventListener('change', function() {
            calculateTotal();
        });
    
        calcTypeMaterial.addEventListener('change', function() {
            calculateTotal();
        });
    
        function calculateTotal() {
            const area = parseFloat(calcInput.value);
            const typeValue = parseFloat(calcType.options[calcType.selectedIndex].value);
            const materialValue = parseFloat(calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value);
    
            if (!isNaN(area) && typeValue && materialValue) {
                const total = area * typeValue * materialValue;
                calcTotal.value = total.toFixed(2);
            } else {
                calcTotal.value = '';
            }
        }
    
        // Добавление свойства calc-total к отправляемым данным в JSON-формате
        const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(form);
            const calcTotalValue = calcTotal.value;
            formData.append('calc-total', calcTotalValue);
    
            const jsonObject = {};
            formData.forEach((value, key) => {
                jsonObject[key] = value;
            });
            
            const jsonData = JSON.stringify(jsonObject);
            console.log(jsonData);
    
            // Здесь можно отправить данные на сервер или использовать их по вашему усмотрению
        });
    });
    
}

export default calculate