import './App.css';

function App() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    console.log(mousePosition);

    useEffect(() => {
        const mouseMove = e => {
       setMousePosition({
        x: e.clientX,
        y: e.clientY
       })
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
  <div className="App">
    <h1>Hello World</h1>
  </div>
)
}
