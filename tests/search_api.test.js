const app = require("../server");
const supertest = require("supertest");

it("GET /api/visitors with date", async () => {
    await supertest(app)
        .get("/api/visitors")
        .query({date:'1404198000231'})
        .expect(200)
        .then((response) => {
            // check Highest Museum Value
            let responseBody = response.body;
            expect(responseBody.attendance.highest.visitors).toBe(32378);
            expect(responseBody.attendance.highest.museum).toBe("avila_adobe");
            // This will fail
            // expect(responseBody.attendance.month).toBe("January");
        })

})

it("GET /api/visitors with date and ignoring highest ", async () => {
    await supertest(app)
        .get("/api/visitors")
        .query({date:'1404198000231',ignore:"avila_adobe"})
        .expect(200)
        .then((response) => {
            let responseBody = response.body;
            expect(responseBody.attendance.highest.visitors).toBe(13490);
            expect(responseBody.attendance.highest.museum).toBe("america_tropical_interpretive_center");
        });
})
