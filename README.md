# authereum練習用ページ
authereumの使い方を練習することができるページです  

# 操作方法
練習用ページにアクセスする  
<a href="https://nandemotoken.github.io/authereum_practice_page" target="blank">https://nandemotoken.github.io/authereum_practice_page</a>  
開発者コンソールを出す(Chromeの場合：F12キー)  
Console部分にAuthereum操作コマンドを入力する  

# 操作コマンド
<a href="https://docs.authereum.com/web3-provider" target="_blank">公式サイトのExamplesを参照</a>  
(ただしimport処理は開発者webページ側で実施済)

### 例：Logging in  
const authereum = new Authereum('mainnet')  
const provider = authereum.getProvider()  
const web3 = new Web3(provider)  
await provider.enable()

