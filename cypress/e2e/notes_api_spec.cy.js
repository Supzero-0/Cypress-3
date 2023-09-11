describe("Tests de l'API Notes", () => {
    const apiKey =
        "567d3f052b8745829b760c188a6bccd1d65f471a0d5747c3b2b1c20a925d8bb9";
    it("Creation of new note with auth token", () => {
        cy.fixture("notes_data").then((notes_data) => {
            const validNote = notes_data.validNote;
            cy.requestForNotes(apiKey, validNote).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.title).to.eq(notes_data.validNote.title);
            });
        });
    });

    it("Creation failed", () => {

        cy.fixture("notes_data").then((notes_data) => {
            const invalidNote = notes_data.invalidNote;
            cy.requestForNotes(apiKey, invalidNote).then((response) => {
                expect(response.status).to.eq(400);
            });
        });
    });
});