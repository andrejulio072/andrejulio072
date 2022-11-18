SET counter to 1
WHILE the counter is less than or equal to 20
  IF counter % 15 is 0 THEN
    DISPLAY 'FIZZ_BUZZ'
  ELSE IF counter % 3 is 0 THEN
    DISPLAY 'FIZZ'
  ELSE IF counter % 5 is 0 THEN
    DISPLAY 'Buzz'
  ELSE
    DISPLAY  counter
  ENDIF
    INCREMENT counter by 1
ENDWHILE
