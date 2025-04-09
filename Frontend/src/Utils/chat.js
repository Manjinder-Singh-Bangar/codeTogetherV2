const formatTime = (timeString) =>{

    const date = new Date(timeString);

    // Extract hours, minutes, and seconds
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    // Format the time (e.g., 20:08:59)
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return formattedTime  // Output: 20:08:59

}

export {formatTime}