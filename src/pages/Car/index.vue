<template>
  <div>
    <Headers />
    <div class="car_container w">
      <div class="title">
        <h2>购物清单</h2>
      </div>
      <div class="empty_car">
        <div class="empty"></div>
        <div class="tips">
          <p>你的购物车中还没有商品</p>
          <a href="" class="login">登录</a>
          <a href="" class="shopping">现在选购</a>
        </div>
      </div>
      <div class="ul_cart">
        <div class="cart_title">
          <span class="info">商品信息</span>
          <span>操作</span>
          <span>小计</span>
          <span>数量</span>
          <span>单价</span>
        </div>
        <div class="pr">
          <div class="cart_item">
            <div class="item_choose">
              <span></span>
            </div>
            <div class="goods_pic">
              <img
                src="https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="name">
              <a href="">坚果 3 TPU 软胶保护套</a>
            </div>
            <div class="operation">
              <span></span>
            </div>
            <div>
              <div class="subtotal">999</div>
              <div class="item_cols_num">
                <div class="select clearfix">
                  <span class="down">-</span>
                  <span class="num">1</span>
                  <span class="up">+</span>
                </div>
              </div>
              <div class="price">55</div>
            </div>
          </div>
           <div class="cart_item">
            <div class="item_choose">
              <span></span>
            </div>
            <div class="goods_pic">
              <img
                src="https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="name">
              <a href="">坚果 3 TPU 软胶保护套</a>
            </div>
            <div class="operation">
              end
            </div>
            <div>
              <div class="subtotal">999</div>
              <div class="item_cols_num">
                <div class="select clearfix">
                  <span class="down">-</span>
                  <span class="num">1</span>
                  <span class="up">+</span>
                </div>
              </div>
              <div class="price">55</div>
            </div>
          </div>
           <div class="cart_item">
            <div class="item_choose">
              <span></span>
            </div>
            <div class="goods_pic">
              <img
                src="https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="name">
              <a href="">坚果 3 TPU 软胶保护套</a>
            </div>
            <div class="operation">
              end
            </div>
            <div>
              <div class="subtotal">999</div>
              <div class="item_cols_num">
                <div class="select clearfix">
                  <span class="down">-</span>
                  <span class="num">1</span>
                  <span class="up">+</span>
                </div>
              </div>
              <div class="price">55</div>
            </div>
          </div>
        </div>
        <div class="car_footer">
          <div class="left">
            <span>全选</span>
            <a href="">删除选中的商品</a>
          </div>
          <div class="right">
            <div class="choose_total">
              <div class="num">
                <h3>已选择<i>6</i>件商品</h3>
                <h4>共计<i>6</i>件商品</h4>
              </div>
              <div class="price">
                <h3>应付总额: <span>￥</span><i>6</i></h3>
                <h4>应付总额不含运费</h4>
              </div>
              <div class="pay">
                <a href="">现在结算</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Car'
}
</script>

<style scoped lang="less">
.car_container {
  margin: 30px auto 60px auto;
  .title {
  height: 60px;
  padding-left: 30px;
  background: linear-gradient(#fbfbfb, #ececec);
  box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
  border: 1px solid #d4d4d4;
  border-radius: 10px 10px 0 0;
}
.title h2 {
  font-weight: 400;
  line-height: 60px;
  font-size: 18px;
  color: #333;
}
.empty_car {
  border: 1px solid #ccc;
  border-top: none;
}
.empty {
  height: 49px;
  padding: 385px 0 0;
  background: url('https://static.smartisanos.cn/index/assets/images/cart-empty.f25b2c8c8168313d570820fe359998c5.png')
    no-repeat center 50px;
  background-color: #fff;
  text-align: center;
}
.tips {
  padding-bottom: 40px;
  background-color: #fff;
  text-align: center;
  p {
    font-size: 14px;
    line-height: 1.5;
    color: #8d8d8d;
    margin-bottom: 17px;
  }
  a {
    display: inline-block;
    border-radius: 6px;
    width: 140px;
    line-height: 46px;
    height: 46px;
    margin: 0 5px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: none;
    outline: none;
  }
  .login {
    border: 1px solid #5c81e3;
    color: #fff;
    background: #678ee7;
    background-image: linear-gradient(180deg, #678ee7, #5078df);
  }
  .shopping {
    border: 1px solid #e1e1e1;
    color: #646464;
    background-color: #f9f9f9;
    background-image: linear-gradient(180deg, #fff, #f9f9f9);
  }
}
}
.ul_cart {
  border:1px solid #ccc;
  border-top: none;
  .cart_title {
    position: relative;
    z-index: 1;
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 30px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-bottom-color: rgba(0, 0, 0, 0.08);
    span {
      width: 137px;
      float: right;
      text-align: center;
      color: #838383;
    }
    .info {
      float: left;
      text-align: left;
      margin-left: 20px;
    }
  }
  .pr {
    position: relative;
    background-color: #fff;
    .cart_item {
      position: relative;
      height: 140px;
      margin-left: 74px;
    }
    .item_choose {
      position: absolute;
      top: 0;
      left: -74px;
      width: 74px;
      height: 20px;
      padding: 60px 0 0 31px;
      font-size: 12px;
      color: #999;
      span {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkY1NzRGRjlBRkM0MTFFNkJGQjdBQzRBNkE2MTBEQ0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkY1NzRGRkFBRkM0MTFFNkJGQjdBQzRBNkE2MTBEQ0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjU3NEZGN0FGQzQxMUU2QkZCN0FDNEE2QTYxMERDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRjU3NEZGOEFGQzQxMUU2QkZCN0FDNEE2QTYxMERDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv1/7yoAAAUVSURBVHja7FddaBxVFD7zu7vJbjYxdmsl/UEajdVIRfChRYn/8aXYFh9ERbGpIKkR/x70qW++tRitSrE1piAoqBQCQWpBSikogojpg2LbgAHbJvu/szu7M3Ov99y9s707md0sZB986IXD/J3zzTnnnnNmPoVSCt1cSgfPgjo0cFwTEO8pLx7+8x4j0ntAVbRxRVG3cQRKrhDq/eBUrROnDt91UYDSdoDKI88fj27dMX5E08xX+5O6OpQyIGLW1ao1CkvLDuRyLiHEPXF18ee35o/vt2RQTQYbe46B3f30XCIee3b71qjSn9CgwkCKZQplmwJhZoNJDQYHDKViKw/o0Y27Bm4b+XpxYc7zQVTJU3Vo5KmjPfHIo7dvNKHqUFgpEChWKNhOXfAc79nsJZtSJjDdsaGR8SMCR2kC3Pf2r6OKok/0JQxwXAolZuy6AITcEI/5kcl6kCsSroO6zOYg2sqAfBPM2MCBeK+mGSwJ5SphxixEckPwumq78NqeBNyaULgO6qIN2vo4vocqodqThqmDy7xw3PoGZPMev0axbQ8OPZOE0TtM2LO7l+vgfbRBWz9a30OV1fc2hZ3VXMI9SiUVeH1vgnuFMrUvCduHDLhy1YXZMyWug7pog7a+h7q/O65HFBfDc+slsvehOOzYasAb+/v59TCC/evCp3NFvim4PJ5birZOcFPAddzFWtXjuUI5OV+Eywzgzs0GFzz/+HQBrApp6PC8Vl1wHGcpWDbg2NZZy3LAc+sGJWb40fd5WFiscZn+Lr8KDHXLlguuXfnJL25dnJBC+vKXqpE4GOvRNdZugMmxWOlMf1sI73SKhc5KKFv1CulLM34ban7s/1z8Jr1l9IUhApGdpqmhfmvhpUQgm7WhnE/Pnjv1xBeYNR+w0dOlzN/nkpse3kWousU01HoMVLzaB6KsCliF53MVKGTyF/748d1XyrnFCkYpA/LFHrj56wun46ndKaus3sd0FMrexaYMyxmBWs0Dy7Jh+VqZFPMrX/114YOJa5fm87jhfg6VwORRRV4j9z7+4f2J1M6XdDMxpmrGZobqsAmz5NaK54vLv88unJn6jenZIlQSBiiDagLYEEc/Ek8AOOLoyWBtB6wErgamNZVA1hyw6/8EdPsj1ehlRVnlLOYtysSUwsZQa2IzvOY6p80eBgDjAqzdQtDG98THUUMUkx2AgdDpaxmy5JkhXWN4FVEivn5MpAGELtqUwgC1gGdlIfJyhPQI8T2t+DlVAyHInpXbhFsWOqtsZUBTOq90kMNKmK0aCLkxwDsAdMNs1S7VMw0D9NrsftumEAW/ClBOcqwDwFiYrRqofDnJPW3AegKbaIe57YkHUclIX6OwIdjXwVyVxI4ZkqdmG08duUta7XI+EH674VBoOQ/XGF+aNKk7G1/dWip0eXUd8CZPWT9P0dvxlJxFOZ3IZOudd8uADlaVQox5jDyF/UL7POWQ/zfREU85OjnIBc/xHj5bF0+JRRQuMmdpxVP0Vjwlk3Ug2ETXVxzRphi+wRECPIXo4TwF4JM3N3Cv5DXzXqr+dWJ5fP9klunSznnKWiWPHCWMp+gBnjJsiJp757NMw/7Y1CA/Tk6nV2HXas08RW/mKbHhhKrWkxSycDOC1CLIU1SZpyDncNkfPvFoE63FnKHI91AHdYM8Rf71jTw28cuxvsENL/f3R5mTrT1Fz5AZ5HI2FNLLM2c/f3ASOxMdu8lT/oc85T8BBgDcvMvPR2EaDgAAAABJRU5ErkJggg==) no-repeat 0 -20px;
        cursor: pointer;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        // float: left;
        margin-right: 9px;
      }
      .choose {
        background-position:  0 0 ;
      }
    }
    .goods_pic {
      position: relative;
      float: left;
      width: 80px;
      height: 80px;
      margin-top: 30px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .name {
      width: 380px;
      float: left;
      margin-left: 20px;
      color: #323232;
      a {
        display: table-cell;
        vertical-align: middle;
        height: 140px;
        color: #333;
        font-size: 16px;
      }
    }
    .operation,
    .subtotal,
    .price,
    .item_cols_num {
      overflow: hidden;
      float: right;
      width: 137px;
      text-align: center;
      color: #666;
      line-height: 140px;
    }
    .item_cols_num {
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      .select {
        height: 40px;
        padding-top: 4px;
              .up, .down {
        background: url('http://xmall.exrick.cn/static/img/cart-updown_8303731e15@2x.7d9dac6.jpg') no-repeat;
        overflow: hidden;
        float: left;
        width: 34px;
        height: 37px;
        background-size: 100% auto;
        line-height: 40px;
        text-indent: -9999em;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .down {
        background-position: 0 -60px;
      }
      .down:hover {
        background-position: 0 -180px;
      }
      .up {
        float: right;
      }
      .up:hover {
        background-position: 0 -120px;
      }
      .num{
        position: relative;
      overflow: hidden;
      float: left;
      width: 36px;
      height: 18px;
      margin: 7px 0 0;
      border: none;
      border-radius: 3px;
      line-height: 18px;
      text-align: center;
      font-size: 14px;
      }
      }
    }
    .operation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      span {
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto;
      color: #c2c2c2;
      background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzYwOTQ1YzQtYmUxOC00NTEwLTlmNTItYzE2ZWZlY2I0ZWMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3NTRCNTE1MkNCMTExRTZBRjlBQjM2NThGRUM3MzFDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NTRCNTE0MkNCMTExRTZBRjlBQjM2NThGRUM3MzFDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkzNDI3MDctMmYwOC00ZTdkLTllZjUtNmU0ZDc0OGJhYWM3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWZmMWFkZjUtNzBmZS0xMTc5LWIxMDAtZTU3NTliM2Y1ZWE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAeAAwAwERAAIRAQMRAf/EAHAAAAEEAwEBAAAAAAAAAAAAAAAEBQYHAgMJCAoBAQAAAAAAAAAAAAAAAAAAAAAQAAEEAQMBBwQABgMAAAAAAAECAwQFEQAhBhIxUZEiEwcIQWEUFaGx0TJCUrIjQxEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+/J99mKy5IkOIZYZQVuOLOEoSO0k/wAh2k7DQRBdjaXHnjLepa1WfTUWkft5iNil0h9DjVay4M4QUKfxg5aVsASmhqnDmVF/YLPa5ZvP2ayScnzT3ZGN/oMAfQAaAFDVNnMWL+vWOxysefrFgg5HmgOx87/Q5B+oI0CpFja0/nkLeuq1OPUV6SP28RG/U6AwhtqyZbGMoCEv4BILqttBL2H2ZTLciO4h5h5AW24g5StJ7CD/ADHaDsdBC7R39xariq81bSvNdTef+uZcdCHwXU4w4zWNOIKRnHrqJI6mhoFWgNAaA0CWrdFPaojJymtunnelvP8A1w7joW+S0nGG2bNptZWMhPrpBA6nToGuicU7VxpZJKrD1rRZyd12j7s89v0H5GB3AADYaB3ye8+J0HCbmnJvkT8G/kRbcx5PcWnuJw33HtHZ9jZznnUVPPqpDmfQXgORuPcw45GcDbLbaeiMgJS2lcNfSoMeJ8p+RHzo+Q1Tyrilva+3XDfbm0asK20gPOqq/b6rU4cHOG43IeZcijNqbcbWkokoKkLSiGhQSHdvJ7z4nQNF6tTVXJlgkLrizaIOTkLq32p4O30P4+D3gkHY6DRRpUzWRoiiQuuL1WsbjC6t92AoYODg/j5B7CCCNjoHbJ7z4nQcKuW8P+Rnzi+RNtxHltTbe3XC/bm0eg2FfPaeXUcCqHHchbZy1G5Jy/kkZtLjTraiiUgpWhTcNsFIY8a4b8i/g18h6njHDqq29xuGe4tm1X1ldBadRU8/qUOk+m/j1IvHOYcdjOKcceWQiMjqcUpcNa+oO6+T3nxOgabxKnqyTESSV2JZq2wMkldm+1AT2b4BkZJ7AASdhoF17HNNbLmkqTV3bzIcc/8AOFc+miOPVVkBpizabbCDjp/ISQT1OjIGT3nxOg3LkLUkJ7O8g7q/poBEhaElP93+pPan+ug05PefE6Aoo5urZE0dSqyjeeDbn/nNuehUc+krJDrFW044FnHT+QoAHqaOgsGTGYlsOxpLSH476C2604OpC0K7QR3/AFBG4O430FeSaK4psiCh28q059Nsuo/cw0bBLWX1NtWjDYzhZWmRjAIdV5iDM5fVzB6Zj5rVjYt2rEirWDkj+2wbjkjbYjII3BI0A3fVz56Yb5slnYN1TEi0WTkD+2vbkEDfcnAA3JA0DzFori62nIdo6tWPUbDqP3M1vfqaBYW41VsuDGVhapHTkdLSvMAsONGYiMNRozSGI7CA2002OlCEJ7AB3/Uk7k7nfQbtAaA0BoDQGgNAaA0BoDQGgNAaA0BoDQGgSTp0OshybCwktRIURpb8mS+sIaZaQMqWtR8ABuTsN9B5l5N7tcgvluMcZL/G6XKkosHI7auQWLe2Hm25TbsemjPDOEqbXK6cK6mVZSAqmZAbslly2cm3LqiSp26mzLdwkkk+axek9I32AwkDYADbQEOA3WrDlS5NpnUkFLtLNmVDgIII81c9G6htuDlJGxBG2gtbjXu1yGhWhjkxf5JS5Slc9uO0nkFc3khTy24rbMe5jMpxlIbRK6QVdTysJIemoM6HZw41hXyWpcKW0h+NJYWFtPNLGUrQoeBB3B2O+g83e61+5f3p42ytX6XjrrDk5CVgN2N+ptEltDycYejUzDrakjPSZS1EjqZSQFdeifv4jQHon7+I0B6J+/iNAeifv4jQWL7U37lBep448tX6XkTshyEhSgW66/S2uS4hlPYzGuWGnFLGekSkJIHU8okILBWqxYNo5lTlxIl3LijjKl28t6xPbkgD8nAHYAABsNAs9Af6/wDHQcTubWnyC+Evv9Zcu5PZ2XP+H+4dk5Pm2c15YqedViVgmOshLkag5dx6M4ENIbT0R0BKW0riL6VBjxG3+QPzd9/a3k3E7Ky9v+H+3ti1YQLOG8s1XA61Th6R1YbjX/L+QR21IW2sdEhJUlYRDQoJDtn6A/1/46BHOWqvYFo3lLlPIiXLahjKV1EpmxB2wcH8bBHYQSDsdA7VsFUKIK1YUHKl6VTuJJGQuplPVyu3fB/GyD2FJBGx0C/0T9/EaDifybhHyH+bvyCs+IcsrLb2+4V7c2TsKwhWDTq6jgVO46CFtk+lG5Fy3kUVtLjLjaiiSjpWhTcNsFIY0PBvkN8IPkBWcX4dW2/uFwv3FsWoNbBgNOoqefVLbhV6cjpDsbj3LuPRnFOOPLIRGR1OKUuGtfUHbL0T9/EaBBZQlTIprkJUpy1fi1DaRglTlrKZr07YOw/JyT2AAk7DQWVzumNNdquUJIqeQOsIkrAHpwLwNojILqsgNR7ZlpsJOOn8lByep1IIRz0T9/EaBa7IedaS1jpGMLKSAVgdgx/iO8fXQDMh5lpTWOsYwgqIPQPqMf5DuH00CL0T9/EaCR8EpjdXaLlaSanj7z6YyyB6c+8La4yi0dw7HqGXXAo46fyVpweppQAXdLiRp8Z+HMYbkxZLamn2HUhTbjahgpUD/A9oO430FNWfB7ikKlVCHb6pGS3HW+gXkFG2GQqQtpm2jtDOFlxEgJwCHVeYhE3rCFFJTPU5WLBIU3bR5NUsEbHy2DcckdxGQRuCRoBmwhSiEwFOWayQEt1MeTarJOw8te3IIHeTgAbkgaCWVnCLi7INu27Q1J6S4wl9Bu5yN+pkqjLcZqWHRjKw4uR0kgJaV5gFyxIkaBGYhw2G40WM2lphhpIS222kYCUgfxPaTud9B//Z);
      background-size: 100% auto;
      transition: none;
      cursor: pointer;
    }
    span:hover {
      background-position: 0 24px;
    }
    }
  }
  .car_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    width: 100%;
    height: 90px;
    background-position: 50%;
    background: #fdfdfd;
    background: linear-gradient(#fdfdfd,#f9f9f9);
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgb(0 0 0 / 4%);
    .left {
      font-size: 12px;
      color: #666;
      span {
        vertical-align: middle;
      }
      span::before {
        content: '';
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAA8CAYAAABmdppWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkY1NzRGRjlBRkM0MTFFNkJGQjdBQzRBNkE2MTBEQ0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkY1NzRGRkFBRkM0MTFFNkJGQjdBQzRBNkE2MTBEQ0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRjU3NEZGN0FGQzQxMUU2QkZCN0FDNEE2QTYxMERDRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRjU3NEZGOEFGQzQxMUU2QkZCN0FDNEE2QTYxMERDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv1/7yoAAAUVSURBVHja7FddaBxVFD7zu7vJbjYxdmsl/UEajdVIRfChRYn/8aXYFh9ERbGpIKkR/x70qW++tRitSrE1piAoqBQCQWpBSikogojpg2LbgAHbJvu/szu7M3Ov99y9s707md0sZB986IXD/J3zzTnnnnNmPoVSCt1cSgfPgjo0cFwTEO8pLx7+8x4j0ntAVbRxRVG3cQRKrhDq/eBUrROnDt91UYDSdoDKI88fj27dMX5E08xX+5O6OpQyIGLW1ao1CkvLDuRyLiHEPXF18ee35o/vt2RQTQYbe46B3f30XCIee3b71qjSn9CgwkCKZQplmwJhZoNJDQYHDKViKw/o0Y27Bm4b+XpxYc7zQVTJU3Vo5KmjPfHIo7dvNKHqUFgpEChWKNhOXfAc79nsJZtSJjDdsaGR8SMCR2kC3Pf2r6OKok/0JQxwXAolZuy6AITcEI/5kcl6kCsSroO6zOYg2sqAfBPM2MCBeK+mGSwJ5SphxixEckPwumq78NqeBNyaULgO6qIN2vo4vocqodqThqmDy7xw3PoGZPMev0axbQ8OPZOE0TtM2LO7l+vgfbRBWz9a30OV1fc2hZ3VXMI9SiUVeH1vgnuFMrUvCduHDLhy1YXZMyWug7pog7a+h7q/O65HFBfDc+slsvehOOzYasAb+/v59TCC/evCp3NFvim4PJ5birZOcFPAddzFWtXjuUI5OV+Eywzgzs0GFzz/+HQBrApp6PC8Vl1wHGcpWDbg2NZZy3LAc+sGJWb40fd5WFiscZn+Lr8KDHXLlguuXfnJL25dnJBC+vKXqpE4GOvRNdZugMmxWOlMf1sI73SKhc5KKFv1CulLM34ban7s/1z8Jr1l9IUhApGdpqmhfmvhpUQgm7WhnE/Pnjv1xBeYNR+w0dOlzN/nkpse3kWousU01HoMVLzaB6KsCliF53MVKGTyF/748d1XyrnFCkYpA/LFHrj56wun46ndKaus3sd0FMrexaYMyxmBWs0Dy7Jh+VqZFPMrX/114YOJa5fm87jhfg6VwORRRV4j9z7+4f2J1M6XdDMxpmrGZobqsAmz5NaK54vLv88unJn6jenZIlQSBiiDagLYEEc/Ek8AOOLoyWBtB6wErgamNZVA1hyw6/8EdPsj1ehlRVnlLOYtysSUwsZQa2IzvOY6p80eBgDjAqzdQtDG98THUUMUkx2AgdDpaxmy5JkhXWN4FVEivn5MpAGELtqUwgC1gGdlIfJyhPQI8T2t+DlVAyHInpXbhFsWOqtsZUBTOq90kMNKmK0aCLkxwDsAdMNs1S7VMw0D9NrsftumEAW/ClBOcqwDwFiYrRqofDnJPW3AegKbaIe57YkHUclIX6OwIdjXwVyVxI4ZkqdmG08duUta7XI+EH674VBoOQ/XGF+aNKk7G1/dWip0eXUd8CZPWT9P0dvxlJxFOZ3IZOudd8uADlaVQox5jDyF/UL7POWQ/zfREU85OjnIBc/xHj5bF0+JRRQuMmdpxVP0Vjwlk3Ug2ETXVxzRphi+wRECPIXo4TwF4JM3N3Cv5DXzXqr+dWJ5fP9klunSznnKWiWPHCWMp+gBnjJsiJp757NMw/7Y1CA/Tk6nV2HXas08RW/mKbHhhKrWkxSycDOC1CLIU1SZpyDncNkfPvFoE63FnKHI91AHdYM8Rf71jTw28cuxvsENL/f3R5mTrT1Fz5AZ5HI2FNLLM2c/f3ASOxMdu8lT/oc85T8BBgDcvMvPR2EaDgAAAABJRU5ErkJggg==) no-repeat 0 -20px;
        cursor: pointer;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        vertical-align: middle;
        // float: left;
        margin-right: 5px;
        margin-top: -3px;
      }
      a {
        margin-left: 20px;
        color: #bbb;
        cursor: pointer;
      }
    }
    .right {
      padding: 20px 30px;
      padding-right: 0;
      .choose_total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .num, .price {
          padding: 0 20px;
          h3 {
            color: #323232;
            font-size: 100%;
            font-weight: 400;
            span {
              color: #d44;
            }
          }
          h3 i, h4 i {
            display: inline-block;
            width: 28px;
            color: #d44;
            text-align: center;
            font-weight: 700;
            font-size: 18px;
          }
          h4 {
            color: #959595;
            font-size: 100%;
            font-weight: 400;
            i {
              color: #959595;
              font-size: 16px;
            }
          }
        }
        .price h3 i {
          text-align: left;
        }
        .num h4 {
          text-align: right;
        }
        .num {
          border-right: 1px solid #ccc;
        }
      }
      .pay {
        width: 130px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        background-color: #678ee7;
    background-image: linear-gradient(180deg,#678ee7,#5078df);
        border-radius: 4px;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
