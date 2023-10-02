export class Player{
    constructor(name, url){
        this.name = name;
        this.score = 0
        this.imageUrl = url
    }
    get playerCard(){
        return `<div class="row">
        <div class="col-12 text-center d-flex no-select p-3 align-items-center justify-content-between">
        <div class="p-3">
            <img class="image-fluid profileImg"src="${this.url}">
        </div>
        <div>
        <p class="fs-2 fw-bold p-3">${this.name}</p>
        </div>
        <div>
            <div class="p-3 d-flex align-items-center">
        <button class="btn btn-success">+</button>
        <p class="mb-0 p-3">${this.score}</p>
        <button class="btn btn-danger">-</button>
        </div>
        </div>
        </div>
    </div>`
    }
}