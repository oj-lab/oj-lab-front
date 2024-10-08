import { useCallback, useEffect, useRef, useState } from "react";
import * as ProblemServiceModel from "@/models/service/problem";
import * as ProblemService from "@/apis/problem";
import { useDispatch } from "react-redux";
import { AddMessageSagaPattern } from "@/store/sagas/message";
import { useTranslation } from "react-i18next";

export const useProblem = (slug: string, fallback?: () => void) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [problem, setProblem] = useState<ProblemServiceModel.Problem | null>(
    null,
  );
  const fallbackRef = useRef(fallback);

  useEffect(() => {
    fallbackRef.current = fallback;
  }, [fallback]);

  useEffect(() => {
    ProblemService.getProblem(slug)
      .then((res) => {
        setProblem(res);
      })
      .catch((err) => {
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "problem-fetch-error",
            content: `${t("Failed to fetch problem")}`,
            duration: 3000,
            err: err.toString(),
            level: "error",
          },
        });
        fallbackRef.current?.();
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  function getProblem() {
    return problem;
  }

  return { getProblem };
};

export const useProblemInfoList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [problemList, setProblemList] = useState<
    ProblemServiceModel.ProblemInfo[]
  >([]);
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [titleQuery, setTitleQuery] = useState<string>("");
  const [difficultyQuery, setDifficultyQuery] = useState<string>("");

  const getProblemInfoListFromServer = useCallback(() => {
    ProblemService.getProblemInfoList(
      limit,
      offset,
      titleQuery,
      difficultyQuery,
    )
      .then((res) => {
        setProblemList(res.list);
        setTotal(res.total);
      })
      .catch((err) => {
        dispatch({
          type: AddMessageSagaPattern,
          payload: {
            id: "problem-list-fetch-error",
            content: `${t("Failed to fetch problem list")}`,
            duration: 3000,
            level: "error",
            err: err.toString(),
          },
        });
      });
  }, [limit, offset, titleQuery, difficultyQuery, dispatch, t]);

  useEffect(() => {
    getProblemInfoListFromServer();
  }, [
    limit,
    offset,
    titleQuery,
    difficultyQuery,
    getProblemInfoListFromServer,
  ]);

  function getProblemInfoList() {
    return problemList;
  }

  function getPageCount(limit: number) {
    return Math.ceil(total / limit);
  }

  function setPagenation(limit: number, offset: number) {
    setLimit(limit);
    setOffset(offset);
  }

  function setSearch(titleQuery: string, difficultyQuery: string) {
    setTitleQuery(titleQuery);
    setDifficultyQuery(difficultyQuery);
  }

  function refreshProblemInfoList() {
    getProblemInfoListFromServer();
  }

  return {
    getProblemInfoList,
    getPageCount,
    setPagenation,
    setSearch,
    refreshProblemInfoList,
  };
};
