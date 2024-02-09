package com.PISBP.repository;

import com.PISBP.entity.Komentar;
import com.PISBP.entity.Vest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VestReposotory extends JpaRepository<Vest,Integer> {
    Optional<Vest> findById(Integer id);
}
