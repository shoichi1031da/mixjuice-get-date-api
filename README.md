# mixjuice-getNewDate-api
## https://mixjuice-get-date.herokuapp.com/
## https://fukuno.jig.jp/app/IchigoJam/#10%20%3F%22MJ%20GETS%20mixjuice-get-date.herokuapp.com%22%0A

以下のコマンドをIchigoJam（MixJuice）もしくはIchigoJam web（仮想MixJuice）で実行してください。

?"MJ GETS mixjuice-get-date.herokuapp.com"

### IchigoJamの配列に下記の日時データが格納されます。
<ul>
<li>[0]:年</li>
<li>[1]:月</li>
<li>[2]:日</li>
<li>[3]:時</li>
<li>[4]:分</li>
<li>[5]:秒</li>
</ul>

### 配列の開始番号はデフォルトで0番ですが、URLのパラメーターに「i=開始番号」を追記することができます。

例）i=50の場合

?"MJ GETS mixjuice-get-date.herokuapp.com?i=50"

<ul>
<li>[50]:年</li>
<li>[51]:月</li>
<li>[52]:日</li>
<li>[53]:時</li>
<li>[54]:分</li>
<li>[55]:秒</li>
</ul>
