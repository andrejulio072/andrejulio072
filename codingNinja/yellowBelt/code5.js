if($this.scene.state)()=="PLAY"){
  createTimer(1000, function()){
      var ndrop = drop.clone();
      var rainx = random(760, 40);
      ndrop.x(rainx);
      ndrop.y(10);
});
  createTimer(3000, function()){
      var nbolt = bolt.clone();
      var boltX = random(760, 40);
      nbolt.x(boltx);
      nbolt.y(10);
}
