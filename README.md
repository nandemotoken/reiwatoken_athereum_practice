# authereum練習用ページ
authereumの使い方を練習することができるページです  
https://nandemotoken.github.io/authereum_practice_page

# 操作方法
練習用ページにアクセスする  
https://nandemotoken.github.io/authereum_practice_page  
開発者コンソールを出す(Chromeの場合：F12キー)  
Console部分にAuthereum操作コマンドを入力する  

# 操作コマンド
https://docs.authereum.com/web3-provider  
上記サイトのExamplesを参照  
(import処理はWebページ側で実施済みです)

### 例：Logging in  
const authereum = new Authereum('mainnet')  
const provider = authereum.getProvider()  
const web3 = new Web3(provider)  
await provider.enable()

