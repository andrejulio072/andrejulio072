if($this.scene.state)()=="PLAY"){
  createTimer(1000, function()){
      var ndrop = drop.clone();
      var rainx = random(760, 40);
      ndrop.x(rainX);
      ndrop.y(10);
});
  createTimer(3000, function()){
      var nbolt = bolt.clone();
      var boltX = random(760, 40);
      nbolt.x(boltX);
      nbolt.y(10);
}
createTimer(1000, function()){

  var nflake= snowflake.clone();
  var flakeX = random(360,140);
  nflake.x(flakeX);
  nflake.y(20);
});
