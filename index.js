function superbowlWin(record){
    const won = record.find(record => record.result === `W`);
    if (won){
        return won.year;
  } else {
      return undefined
  }
}
