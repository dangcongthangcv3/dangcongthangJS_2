// CÂU 1
function cau1(){
    //intput: ngayLam:number, luong1Ngay:number
    var ngayLam = document.getElementById('txtNgayLam').value
    var luong1Ngay = document.getElementById('txtLuong1Ngay').value
    //Output: tienLuong: number
    var tienLuong=''
    //progress
    tienLuong = parseInt(ngayLam)* parseInt(luong1Ngay)
    //Hiển thị kết quả
    document.getElementById('ketQua1').innerHTML =  'Kết quả: ' +  tienLuong
}

// CÂU 2
function cau2(){
    //intput: giatri1:number, giatri2:number,giatri3:number,giatri4:number,giatri5:number
    var giaTri1= document.getElementById('txtGiaTri1').value
    var giaTri2= document.getElementById('txtGiaTri2').value
    var giaTri3= document.getElementById('txtGiaTri3').value
    var giaTri4= document.getElementById('txtGiaTri4').value
    var giaTri5= document.getElementById('txtGiaTri5').value
    //output: trungBinh:number
    var trungBinh =''
    //progress
    var trungBinh= (parseInt(giaTri1) + parseInt(giaTri2) + parseInt(giaTri3) + parseInt(giaTri4) + parseInt(giaTri5))/5
    //Hiển thị kết quả
    document.getElementById('ketQua2').innerHTML =  'Kết quả: ' +  trungBinh
}

// CÂU 3
function cau3(){
    //intput: USD:number
    var USD= document.getElementById('txtUSD').value
    //output VND:number
    var VND = ''
    //progress
    var VND =USD*23500
    //Hiển thị kết quả
    document.getElementById('ketQua3').innerHTML = 'Số tiền: ' + VND + ' VNĐ'
}

// CÂU 4
function cau4(){
    // input: chieuDai: USD:number, chieuRong:number
    var chieuRong= document.getElementById('txtChieuDai').value
    var chieuDai= document.getElementById('txtChieuRong').value
    //output: dienTich:number; chuVi:number
    var dienTich = ''
    var chuVi = ''
    //progress
    var dienTich = chieuDai*chieuRong
    var chuVi = (parseInt(chieuDai)+parseInt(chieuRong))/2
    //Hiển thị kết quả
    document.getElementById('ketQua4').innerHTML = 'Diện tích: ' + dienTich + '<br/> Chu vi: '+ chuVi
}

// CÂU 5
function cau5(){
    //input: chuSo:number
    var chuSo= document.getElementById('txtChuSo').value
    //tong: number
    var tong=''
    //progress
    var hangDonVi = parseInt(chuSo)%10
    var hangChuc = Math.floor(parseInt(chuSo)/10)
    var tong = hangChuc + hangDonVi
    //Hiển thị kết quả
    document.getElementById('ketQua5').innerHTML = 'Tổng: ' + tong
}
//Hoàn thành JS lần 2