describe('Tasks Component', () => {
    beforeEach(() => {
      cy.intercept('GET', '/tasks/get', { fixture: 'tasks.json' }).as('getTasks');
      cy.visit('http://localhost:5173/');
    });
  
    it('should display a list of tasks after fetching data', () => {
      cy.get('table', { timeout: 10000 }).should('exist');
  
      cy.get('table tbody tr').should('have.length', 2);
      cy.get('table tbody tr').first().contains('Task 1');
      cy.get('table tbody tr').last().contains('Task 2');
    });
  });  

  describe('API Call Verification', () => {
    it('should make an API call to fetch tasks', () => {
      cy.intercept('GET', '/tasks/get').as('getTasks');
  
      cy.visit('http://localhost:5173/');
  
      it('should display a list of tasks after fetching data', () => {
        cy.get('table', { timeout: 10000 }).should('exist');
    
        cy.get('table tbody tr').should('have.length', 2);
        cy.get('table tbody tr').first().contains('Task 1');
        cy.get('table tbody tr').last().contains('Task 2');
      });
    });
  });

  describe('Create Task Form', () => {
    before(() => {
      cy.intercept('POST', '/tasks/create', {
        body: {
          id: 40,
          name: 'New Task',
          description: 'Task description',
          state: 'pending',
          completedAt: "2025-01-01"
        }
      }).as('createTask');
    });
  
    it('should submit the form and create a new task', () => {
        cy.intercept('POST', '/tasks/create', {
          body: {
            id: 48,
            name: 'New Task',
            description: 'Task description',
            status: 'pending',
            completedAt: '2025-01-20',
          },
        }).as('addTask');
      
        cy.visit('http://localhost:5173/create-task');
      
        cy.get('input[name="name"]').type('New Task');
        cy.get('textarea[name="description"]').type('Task description');
        cy.get('input[name="completedAt"]').type('2025-01-20');
      
        cy.get('button[type="submit"]').click();
      
        cy.wait('@addTask');
      
        cy.get('#next').click();
      });      
  });
  