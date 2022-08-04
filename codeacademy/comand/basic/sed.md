sed
sed 's/snow/rain/' forests.txt
sed stands for “stream editor.” It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to “find and replace.”

Let’s look at the expression 's/snow/rain/':

s: stands for “substitution.” It is always used when using sed for substitution.
snow: the search string, or the text to find.
rain: the replacement string, or the text to add in place.
In this case, sed searches forests.txt for the word “snow” and replaces it with “rain.” Importantly, the above command will only replace the first instance of “snow” on a line.

sed 's/snow/rain/g' forests.txt
The above command uses the g expression, meaning “global.” Here sed searches forests.txt for the word “snow” and replaces it with “rain” globally. This means all instances of “snow” on a line will be turned to “rain.”

sed as we’ve used it will only rewrite the command line output and the actual file won’t be changed. In order to rewrite the actual file, we need to use -i at the beginning of the command:

sed -i 's/snow/rain/g' forests.txt
The above command will rewrite forests.txt and replace all instances (since we’re also using g) of “snow” with “rain”.
