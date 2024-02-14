package com.PISBP.repository;

import com.PISBP.entity.Vest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VestReposotory extends JpaRepository<Vest,Integer> {
    Optional<Vest> findById(Integer id);
    @Query("select v from Vest v where DATE(v.date)=CURRENT_DATE")
    List<Vest> findTodays();

    List<Vest> findByNovinarId(Integer novinarId);
    List<Vest> findByState(String state);
    List<Vest> findByNovinarIdAndStateIn(Integer novinarId, List<String> states);
    List<Vest> findByStateAndRubrikaIdIn(String state, List<Integer> rubrikaIds);


}
