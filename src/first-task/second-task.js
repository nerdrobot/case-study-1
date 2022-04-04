import {useState} from "react";

const SecondTask = () => {

    const [movieTitles, setMovieTitles] = useState([]);

    const getMovieTitles = () => {
        Promise.all([
            fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1').then(res => res.json()),
            fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=2').then(res => res.json())
        ]).then(([firstPageData, secondPageData]) => {
            let mergedData = firstPageData.data.concat(secondPageData.data);
            mergedData.sort((a, b) => {
                let titleA = a.Title.toUpperCase();
                let titleB = b.Title.toUpperCase();
                return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
            })
            setMovieTitles(mergedData);
        });
    }

    const movieItems = movieTitles.map((item, index) => {
        return (
            <li key={index}>
                {item.Title}
            </li>
        );
    })


    return (
        <div>
            <h3>Second Task:</h3>
            <div>
                <button onClick={getMovieTitles}>Display Movie Titles</button>
            </div>
            <div>
                <ul>{movieItems}</ul>
            </div>
        </div>
    )
        ;
}

export default SecondTask;