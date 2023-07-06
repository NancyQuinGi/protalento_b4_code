// 1 Definir una cosntante con el elemento

const listInput = [
    {
        type: 'text',
        label: 'Nombre',
        value: 'value',
        placeholder: 'Ingresa tu nombre',
        id: 'name',
        extraclass: '',
        required: true,
    },
    {
        type: 'email',
        label: 'Email',
        value: '',
        placeholder: 'Ingresa tu E-mail',
        id: 'email',
        extraclass: '',
        required: true,
    },
    {
        type: 'password',
        label: 'Contraseña',
        value: '',
        placeholder: 'Ingresa tu Contraseña',
        id: 'password',
        extraclass: '',
        required: true,
    },
];

// 2 Definir una funcion
/**
 function createInputs() {
 }
 */
const createInputs = (inputs) => {
    const setionInputsHTML = document.getElementById('section-inputs'); 
    /*const myInputs = [];
    for(input of inputs) {
        const myInput = document.createElement("INPUT");
        for(property in input) {
            myInput.setAttribute(property, input[property]);
        }
        
        console.log(input);
        myInputs.push(myInput);
        setionInputsHTML.appendChild(myInput);
    }*/
    const functionMap =() => {
        console.log ('->');
        return '<-'
    }
    const myInputs = inputs.map(functionMap);
    console.log(myInputs)



};

// usar funcion
createInputs(listInput);
