alert('SILAHKAN KLIK 2 KALI JIKA NAMA/MDPL GUNUNG TIDAK BERUBAH!')
const thumb = document.querySelectorAll('.thumb');

thumb.forEach(function(ek){
    ek.addEventListener('click', function(e){
        let thumbnail = document.querySelector('.big-img');
        const label = document.querySelector('.label');
        const mdpl = document.querySelector('.mdpl');

        if(thumbnail.src == 'http://127.0.0.1:5500/LatihanJS/IMAGE%20GALLERY%20(DOM)/img/merapi.jpg'){
            thumbnail.src = ek.src
            label.textContent = 'MERAPI';
            mdpl.textContent = '2910 MDPL';
        }else if(thumbnail.src == 'http://127.0.0.1:5500/LatihanJS/IMAGE%20GALLERY%20(DOM)/img/merbabu.jpg'){
            thumbnail.src = ek.src
            label.textContent = 'MERBABU';
            mdpl.textContent = '3145 MDPL';
        }else if(thumbnail.src == 'http://127.0.0.1:5500/LatihanJS/IMAGE%20GALLERY%20(DOM)/img/pangrango.jpg'){
            thumbnail.src = ek.src;
            label.textContent = 'PANGRANGO';
            mdpl.textContent = '3019 MDPL';
        }else if(thumbnail.src == 'http://127.0.0.1:5500/LatihanJS/IMAGE%20GALLERY%20(DOM)/img/prau.jpg'){
            thumbnail.src = ek.src;
            label.textContent = 'PRAU';
            mdpl.textContent = '2590 MDPL';
        }else if(thumbnail.src == 'http://127.0.0.1:5500/LatihanJS/IMAGE%20GALLERY%20(DOM)/img/sindoro.jpg'){
            thumbnail.src = ek.src;
            label.textContent = 'NONA';
            mdpl.textContent = '2874 MDPL';
        }else{
            thumbnail.src = ek.src;
            label.textContent = 'SINDORO';
            mdpl.textContent = '3136 MDPL';
        }
    })
})