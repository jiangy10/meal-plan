import {LitElement, html,css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('top-nav')
export class TopNavBar extends LitElement{
    static styles = css`
      nav{
        width: 300px;
        height: 50px;
        background-color: rgb(226,206,180);
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
      }
    `
    render(){
        return html`
        <nav>
            <a>Plan</a>
            <a>Frig</a>
            <a>Cart</a>
        </nav>
        `
    }
}
