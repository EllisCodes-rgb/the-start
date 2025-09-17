export default function Home() {
  return (
  <main style={{backgroundColor: "grey", textAlign: "center"}}>
      <h1 style={{ fontSize: 100, fontFamily: "comicsans"}}>Hello, world</h1>
      <h2 style={{ fontSize: 65, color: "green"}}>Heading 2, less important than heading 1</h2>
      <p style={{backgroundColor: "purple"}}>This is my learning space</p>
      <p>seeing visually the difference between line break text <br></br><br></br>and non line break text</p>
      <p>to better understand how this works</p>
      <img style={{display: "inline-block"}} src="https://media.4-paws.org/d/2/5/f/d25ff020556e4b5eae747c55576f3b50886c0b90/cut%20cat%20serhio%2002-1813x1811-720x719.jpg" width="300" height="400"/>
      <p style={{ color: "blue"}}>here is a cat</p>
      <a href="https://www.w3schools.com/">My first test link</a>
<br></br> <b>the quick brown fox jumps over the lazy dog</b> <br></br>
<i>the quick brown fox jumps over the lazy dog</i>
<p> the <del>slow</del> quick brown fox jumps over the <del>scary</del> lazy dog</p>
<br></br>
<p>my favourite colour is <em>navy</em></p>
</main>
  )
}