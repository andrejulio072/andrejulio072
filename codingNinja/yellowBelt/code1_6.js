if ($this.powerup == "frozen" || $this.timer == null) {
  $this.fill("#000FF");
  $this.timer = createTimer(
      2000,
      function(){
          $this.powerup = null;
      },
      false
      );
} else if ($this.powerup == null){
  $this.fill("#BBBBBB");
}
