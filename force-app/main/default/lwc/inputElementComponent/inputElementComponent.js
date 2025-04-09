import { LightningElement, track } from 'lwc';

export default class InputElementComponent extends LightningElement {

    @track applicantId;
    
    handleClick(event) {
        console.log('Clicked');
    }
}