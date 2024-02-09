package com.PISBP.entity;

import com.PISBP.repository.KomentarRepository;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String naslov;

    String text;

    String tag;

    Integer brojLajkova;

    Integer brojDisajkova;

    Date date;

    @ManyToOne
    Rubrika rubrika;

    @ManyToOne
    User novinar;

    @OneToMany(mappedBy = "vest")
    List<Komentar> komentari;
}
