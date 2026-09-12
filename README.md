1. Name of my project : Dev Stack
2. A little description : This is a single page site, inculeding navbar, hero section,
                          a card section about some mordern web development technologies and also a footer section.
3. Technology that i have used : Javascript, React, TypeScript. 
4. 3 features about my project : (1) You can add items in 'Your Stack' section by
                                 clicking 'Add to stack' button of card.
                                 (2) After clicking Add to Stack button you can see a success toast while adding that card into your stack section.
                                 (3) You can delete added items from 'Your Stack' section.


(i)   What is JSX, and why is it used in React?
Ans : JSX is a syntax extension for JavaScript that is used to write code as like
      HTML inside JavaScript but this in not HTML. It makes UI code easier to write, read, and understand.


(ii)  What is the difference between props and state?
Ans:  Props for passing data from parant component to child component and state
      use for managing data inside a component.


(iii) What does the useState hook do, and where did you use it in this project?
Ans:  The useState hook is used for creating and managing changeable data
      inside a component. In this project, i used it in the TechnologyStack component to store the selected technologies.
      

(iv)  What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:  useEffect is used for run side effects in component.


(v)   Why does every item in a .map() list need a unique key prop?
Ans:  Every item in a .map() list need a unique key so that React can identify which
      items changed or deleted.


(vi)  What is conditional rendering? Show one place you used it (example: the
      empty stack message).
Ans:  Conditional rendering is for showing different UI based on condition.
      in my project: 
      {addedTechnology.length === 0 ? (
    <h5>Your stack is empty.</h5>
    ) : (
    <div>
        {/* selected technologies */}
    </div>
    )}
    


(vii) How do you pass data from a parent component to a child component, and how
      does a child send something back to the parent?
Ans:  Pass data by using props from parent component to a child component.
      Pass a callback function as a prop, then the child calls that function to send data back.