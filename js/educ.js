var F = 'Presentacion',
    F1 = 'Dimensiones',
    F2 = 'Material',
    F3 = 'Color',
    F4 = 'Comprar';
var fN = `1.- `,
    fN1 = `2.- `;
var FP = 'Brazo Completo con servos',
    FPP = 'Brazo Chasis',
    FP1 = 'Apertura 35 mm Base 16 cm x Altura 38 cm	',
    FP2 = 'MDF',
    FP3 = 'Madera',
    FP4 = 'Venta';
var b = `
<div class="container">

<div class="row imM">
        <div class="col-md-4">
            <img src="./src/educ/BRMM.jpg" alt="" class="imgs">
        </div>
        <div class="col-md-4">
            <img src="./src/educ/BRMM.jpg" alt="" class="imgs">

        </div>
        <div class="col-md-4">
        <img src=" ./src/educ/BRMM.jpg " alt=" " class="imgs ">
        </div>
        </div>

<table class="table me" >
<thead class="he">
    <tr class="fi">
        <th scope="col">#</th>
        <th scope="col">${F}</th>
        <th scope="col">${F1}</th>
        <th scope="col">${F2}</th>
        <th scope="col">${F3}</th>
        <th scope="col" style="text-align: center;">${F4}</th>

    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">${fN}</th>
        <td>Brazo Completo con servos</td>
        <td>Apertura 35 mm Base 16 cm x Altura 38 cm</td>
        <td>MDF</td>
        <td>Madera</td>
        <td>
            <a href="mercadolibre.com">Mercado libre</a>
            <a href="mercadolibre.com">Amazon</a>

        </td>


    </tr>
    <tr>
        <th scope="row">${fN1}</th>
        <td>Brazo Chasis</td>
        <td>Apertura 35 mm Base 16 cm x Altura 38 cm</td>
        <td>MDF</td>
        <td>Madera</td>
        <td>
            <a href="mercadolibre.com">Mercado libre</a>
            <a href="mercadolibre.com">Amazon</a>
        </td>
    </tr>
</tbody>
</table>
</div>
`
var c = `

<div class="container sd">
<div class="row ">
    <div class="col-md-6">
        <div class="row">
            <div class="col-md-6 ses">
                <h2 >${F}</h2>
                <p><span>${fN} </span>${FP}</p>
                <p><span>${fN1}</span>${FPP}</p>

            </div>
            <div class="col-md-6 ses">
                <h2>${F1}</h2>
                <p><span>${fN} </span>${FP1}</p>
                <p><span>${fN1}</span>${FP1}</p>

            </div>

        </div>
    </div>
</div>
<div class="col-md-6">
    <div class="row">
        <div class="col-md-6 ses">
            <h2>${F2}</h2>
            <p><span>${fN} </span>${FP2}</p>
            <p><span>${fN1}</span>${FP2}</p>

        </div>
        <div class="col-md-6 ses">
            <h2>${F3}</h2>
            <p><span>${fN} </span>${FP3}</p>
            <p><span>${fN1}</span>${FP3}</p>


        </div>
    </div>

    <div class="row">
        <div class="col-md-12 ses">
            <h2> ${F4}</h2>
            <p><span>${fN} </span> ${FP4}</p>
            <p><span>${fN1}</span> ${FP4}</p>

        </div>
    </div>
</div>
</div>

`;
s1 = `
<h1 class="txt">Parte 1</h1>

<div class="row row-cols-2 row-cols-md-4 g-16 " id="tryss">
    <!-- Col -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop " onclick="educ() ">
            <div class="card h-100 ">
                <img src="./src/educ/QuoMa.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f ">Brazo Robótico Quo</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col -->

    <!-- Col1 -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="educ1() ">
            <div class="card h-100 ">
                <img src="./src/educ/QuoPl.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f1 ">Brazo Robótico Quo</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 1 -->

    <!--Brazo Robótico Mini -->
    <!-- Col 2-->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRMM.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f2 ">Brazo Robótico Mini</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 2 -->

    <!-- Col 3  -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRMP.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f3 ">Brazo Robótico Mini</h5>
                </div>
            </div>
        </a>
    </div>
    <!--Brazo Robótico Gear -->
    <!-- End Col 3 -->


    <!-- Col 4 -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRGM.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f4 ">Brazo Robótico Gear</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col4 -->

    <!-- Col 5 -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRGP.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f5 ">Brazo Robótico Gear</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 5 -->

    <!-- Col 6-->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRP.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f6 ">Brazo Robótico Puma</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 6-->

    <!-- Col 7-->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRQMa.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f7 ">Brazo Robótico Quantum</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 7-->

    <!-- Col 8 -->
    <div class="col">
        <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <div class="card h-100 ">
                <img src="./src/educ/BRQPl.jpg " class="card-img-top img " alt="... ">
                <div class="card-body ">
                    <h5 class="card-title " id="f8 ">Brazo Robótico Quantum</h5>
                </div>
            </div>
        </a>
    </div>
    <!-- End Col 8 -->

</div>
`;

s2 = `
<h1 class="txt">Parte 2</h1>
<div class="row row-cols-2 row-cols-md-4 g-16 " id="epa">
<!-- Col 9-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/BRSM.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f9 ">Brazo Robótico Sirio</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 9 -->

<!-- Col 10 -->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/BRSPl.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f10 ">Brazo Robótico Sirio</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 10-->

<!-- Col 11 -->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GSPl.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f11 ">Gripper Sonne</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 11-->
<!-- Col 12 -->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GSMa.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f12 ">Gripper Sonne</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 12 -->

<!-- Col 13 -->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/QuoMa.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f13 ">Gripper Sonne</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 13 -->

<!-- Col 14-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GLG.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f14 ">Gripper La Garra</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 14 -->

<!-- Col 15-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GFD.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f15 ">Gripper Flexible Drei</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 15 -->

<!-- Col 16-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GFZ.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f16 ">Gripper Flexible zwei</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 16 -->

<!-- Col 17-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/GD.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="f17 ">Gripper Drei</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 17-->

<!-- Col 18-->
<div class="col">
    <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <div class="card h-100 ">
            <img src="./src/educ/LLAN.jpg " class="card-img-top img " alt="... ">
            <div class="card-body ">
                <h5 class="card-title " id="18 ">Llantas</h5>
            </div>
        </div>
    </a>
</div>
<!-- End Col 18-->
</div>
`

//document.getElementById('cont').innerHTML = s1;

function educ() {
    document.getElementById('staticBackdropLabel').innerHTML = `helloworld`
    document.getElementById('body').innerHTML = b + c;

}

function educ1() {
    document.getElementById('staticBackdropLabel').innerHTML = `helloworld`
    document.getElementById('body').innerHTML = c;

}

function clo() {
    document.getElementById('staticBackdropLabel').innerHTML = ' ';
    document.getElementById('body').innerHTML = ` `;
}

function el() {
    elem = document.getElementById('cont').innerHTML = '';
    elem1 = document.getElementById('cont').innerHTML = s1;

}

function el1() {
    elem = document.getElementById('cont').innerHTML = '';
    elem1 = document.getElementById('cont').innerHTML = s2;

}
var es = document.getElementById('trys');
var ess = document.getElementById('tryss');
es.addEventListener("click", fun);
ess.addEventListener("click", funs);

var ep = document.getElementById('ep');
var eps = document.getElementById('eps');
document.getElementById('ep').innerHTML = s1;


function fun() {
    document.getElementById('ep').innerHTML = s1;
    eps.classList.remove('trys');
    eps.classList.add('try');
    ep.classList.remove('try');
    ep.classList.add('trys');

}

function funs() {
    ep.classList.remove('trys');
    ep.classList.add('try');
    eps.classList.remove('try');
    eps.classList.add('trys');
    document.getElementById('eps').innerHTML = s2;
}