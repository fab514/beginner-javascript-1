# Click Outside
## Choosing random images- all images on page are not the same. 
```html
<div class="cards">
    <div class="card" data-description="Wes is cool">
      <img src="https://picsum.photos/200?random=1" alt="Wes Bos">
      <h2>Wes Bos</h2>
      <button>Learn more →</button>
    </div>
```
## A little CSS grid!
- Can it be helpful form my website? 
```css
 <style>

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 20px; 
      padding: 2rem; 
    }

    .card {
      background: white;
      padding: 1rem; 
      border-radius: 2px;
    }
    .card img {
      width: 100%;
    }
    .card h2 {
      color: black;
    }
  </style>
  ```