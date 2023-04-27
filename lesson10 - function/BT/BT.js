function kiemTraNamNhuan(year){
    if (year%4 == 0 && year%100 == 0){
        return true;
    }
    if (year%100==0 && year%400 ==0){
        return true;
    }
    return false;
}

function kiemTraNgayThangNam(day, month, year){
    if((month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) && day>0 && day<=31){
        return true;
    }
    if((month==4 || month==6 || month==9 || month==11) && day>0 && day<=30){
        return true;
    }
    if(month==2 && kiemTraNamNhuan(year) && day>0 && day<=29){
        return true;
    }
    if(month==2 && !kiemTraNamNhuan(year) && day>0 && day<=29){
        return true;
    }
}