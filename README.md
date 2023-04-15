# React-Contact-List

This project was regarding creation of a contact list by fetching the data from an API and rendering that response accordingly. 
Additionally update and delete functions were also expected to be there in the list. There have been 4 main steps:-

1. So at first a simple react app was created and data was fetched from the API (https://jsonplaceholder.typicode.com/users).
The code for this was written in useEffect() function so that the contact list would render whenever the page loads.
A useState hook was created for it (data) and whatever the response was coming from the API server, it was passed to setData.
After it basic JSX and CSS structure was created to render the data on page with some styles.

2. Update button was initialised. The function handling the update functionality contains a PUT call to the API and the corresponding
response was passed to setData hook. The contact is updated.

3. Delete functionality required to send a DELETE call to the API which then returned the object to be deleted. An array map function
was used to filter the rest objects to the new array excluding the one that is to be deleted. Resulting new array was passed to setData 
hook which then rendered the list. The contact is hance deleted.

4. Last task was to create an Add Contact functionality. A new useState snippet was initialised the contained names and values as key-value 
pairs corresponding to the name and values in the input tags of the add contact form. Initially all the values were empty strings and the state
was updated when the form received inputs. The state was sent to the API via POST call which then returned the response containing the newly
added contact. This contact object was set to the setData and a new contact is rendered on the page. The contact is created.
