import { expect, test } from "bun:test";

import { api } from ".";

test("GET one Incident", async () => {
  const res = await api.request("/incident/2", {
    headers: {
      "x-openstatus-key": "1",
    },
  });
  expect(res.status).toBe(200);
  expect(await res.json()).toMatchObject({
    id: 2,
    startedAt: expect.any(String),
    monitorId: 1,
    acknowledgedAt: null,
    resolvedAt: null,
    resolvedBy: null,
    acknowledgedBy: null,

  });
});

test("Update an incident ", async () => {
  const res = await api.request("/incident/2", {
    method: "PUT",
    headers: {
      "x-openstatus-key": "1",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      acknowledgedAt: "2023-11-08T21:03:13.000Z",
    }),
  });
  expect(res.status).toBe(200);

  expect((await res.json())).toMatchObject({
    acknowledgedAt: "2023-11-08T21:03:13.000Z",
    monitorId: 1,
    id: 2,
    startedAt: expect.any(String),
    resolvedAt: null,
    resolvedBy: null,
    acknowledgedBy: null,
  });
});

test("Get all Incidents", async () => {
  const res = await api.request("/incident", {
    method:"GET",
    headers: {
      "x-openstatus-key": "1",
    },
  });
  expect(res.status).toBe(200);
  expect((await res.json())[0]).toMatchObject({
    acknowledgedAt: null,
    monitorId: 1,
    id: 1,
    startedAt: expect.any(String),
    resolvedAt: null,
    resolvedBy: null,
    acknowledgedBy: null,
  });

});