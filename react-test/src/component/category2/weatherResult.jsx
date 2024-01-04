

function WeatherResult(props){
    const { place } = props;

    return <p>

        {place}의 날씨는 19.2{'℃'}입니다.

    </p>


}

export default WeatherResult;