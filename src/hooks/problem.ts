import { useEffect, useState } from "react";
import { ProblemServiceModel } from "../typings/problem";
import { ProblemService } from "../api/problem";

export const useProblem = (slug: string) => {
  const [problemInfo, setProblemInfo] =
    useState<ProblemServiceModel.ProblemInfo | null>(null);

  useEffect(() => {
    ProblemService.getProblemInfo(slug)
      .then((res) => {
        setProblemInfo(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  function getProblemInfo() {
    return problemInfo;
  }

  return { getProblemInfo };
};

export const useProblemList = () => {
  const [problemList, setProblemList] = useState<
    ProblemServiceModel.ProblemInfo[]
  >([]);

  useEffect(() => {
    ProblemService.getProblemList()
      .then((res) => {
        setProblemList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getProblemList() {
    return problemList;
  }

  return { getProblemList };
};