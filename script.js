document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelector('.calculator-keys');
    const display = document.getElementById('result');
    let displayValue = '';
    
    keys.addEventListener('click', function(event) {
        const { target } = event;
        const { value } = target;
        
        if (!target.matches('button')) {
            return;
        }
        
        switch (value) {
            case '=':
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
                break;
            case 'C':
                displayValue = '';
                break;
            default:
                displayValue += value;
                break;
        }
        
        display.value = displayValue;
    });
});
