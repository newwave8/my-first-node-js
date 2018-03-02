'use strict';
const number = process.argv[2] || 0;
/*
コマンドライン引数を取っている。
「node　ファイル名」と書いてプログラムを実行するが、「node　ファイル名」の後にコマンドライン引数をとる。
例えば「node app.js 100」
process.argvは Node.jsがデフォルトで提供してくれる、コマンドラインの引数が入った配列。
なぜ添字として2番を使っているかというと、0番にはnodeコマンドのファイルのパスが入り、
1番には、実行しているプログラムのファイルのパスが入る、という決まりがあるため。
したがって、コマンドの後ろに書いた最初の引数（例でいえば「node ファイル名 100」の100）はprocess.argv[2]になる。
つまりこれは、コマンドライン引数が指定されていればその値、そうでなければ 0 を、変数 number に代入するというコードである。

条件付き論理和は、先に左側に書かれた値を見て Truthy であれば、その値を結果として使う。
そして左側の値が Falsy であれば、その右側の値を結果として使う、という特性がある。
その特性を利用して、選択的な代入を行っているのです。
*/
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum +i;
}
console.log(sum);

/*
…or push an existing repository from the command line

git remote add origin git@github.com:newwave8/my-first-node-js.git
git push -u origin master

<ファイルをまとめて指定する場合>
ワーキング・ツリーにあるファイルをまとめてコマンドを実行することもできる。
ワーキング・ツリーでオプションに「.」を指定して、
$ git add .  
とコマンドを叩けばOKだ。
*/