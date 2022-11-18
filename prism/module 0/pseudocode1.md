function computeAverage(array)
SET sum as 0
SET len as length of the array
FOR every number in the array
  SET sum as sum + number
ENDFOR
SET average as sum/len
RETURN average
ENDFUNCTION
