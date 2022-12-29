import { ethers } from "hardhat";
import { expect } from "chai";

describe("Attack", () => {
  it("Should work", async () => {
    const CallMeChallenge = await ethers.getContractFactory("CallMeChallenge");
    const callMeChallenge = await CallMeChallenge.deploy();

    await callMeChallenge.callme();

    expect(await callMeChallenge.isComplete()).to.be.true;
  })
})
