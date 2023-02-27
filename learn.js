
//////////////////////////// BÀI TẬP VỀ NHÀ//////////////////////////

// Viết prototype numberFormat() có tác dụng chuyển đổi 1 number thành dạng tiền tệ. Với các arguments như sau

// numberFormat(decimals='.', decimal-point=0, separator=',', currency='đ')

// Trong đó:

// decimals: Ký tự phân cách phần thập phân (Mặc định là dấu .)
// decimalpoint: Số phần thập phân (Áp dụng nguyên tắc làm tròn)
// separator: Ký tự phân tách hàng ngàn (Mặc định là dấu ,)
// currency: Đơn vị tiền tệ (mặc định là đ)

// Ví dụ:
// var price = 12000000
// => 12,000,000 đ

Number.prototype.numberFormat = function () {
    var num = this.toString()
    var result = []
    let cnt = 0
    for (let i = num.length - 1; i >= 0; i--) {
        ++cnt
        result.push(num[i])
        if (cnt === 3) {
            result.push(',')
            cnt = 0
        }
    }
    if (result[result.length - 1] === ',') {
        delete result[result.length - 1]
    }
    return result.reverse().join('') + ' đ'
}

var price = 1200000000
var x = price.numberFormat()
console.log(x);


